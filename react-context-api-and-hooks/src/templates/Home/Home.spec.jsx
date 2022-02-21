import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { Home } from ".";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { userEvent } from "react";

const handlers = [
  rest.get("*jsonplaceholder.typicode.com*", async (req, res, ctx) => {
    return res(
      ctx.json([
        {
          userId: 1,
          id: 1,
          title: "title1",
          body: "body1",
          url: "img1.jpg",
        },
        {
          userId: 2,
          id: 2,
          title: "title2",
          body: "body2",
          url: "img2.jpg",
        },
        {
          userId: 3,
          id: 3,
          title: "title3",
          body: "body3",
          url: "img3.jpg",
        },
      ])
    );
  }),
];

const server = setupServer(...handlers);

describe("<Home />", () => {
  beforeAll(() => {
    server.listen();
  });
  afterEach(() => server.resetHandlers());
  afterAll(() => {
    server.close();
  });

  it("should render search, posts and loadmore", async () => {
    //const { debug } = render(<Home />);
    //screen.debug();
    //debug();
    //const { debug } = render(<Home />);
    render(<Home />);
    const noMorePosts = screen.getByText("Não existem posts =(");

    expect.assertions(10);
    await waitForElementToBeRemoved(noMorePosts);

    const search = screen.getByPlaceholderText(/type your search/i);
    expect(search).toBeInTheDocument();

    const images = screen.getAllByRole("img", { name: /title/i });
    expect(images).toHaveLength(2);

    const button = screen.getByRole("button", { name: /load more posts/i });
    expect(button).toBeInTheDocument();
  });

  it("should search for posts", async () => {
    render(<Home />);
    const noMorePosts = screen.getByText("Não existem posts =(");

    await waitForElementToBeRemoved(noMorePosts);

    const search = screen.getByPlaceholderText(/type your search/i);

    expect(screen.getByRole("heading", { name: "title1 1" })).toBeInTheDocument;
    expect(screen.getByRole("heading", { name: "title2 2" })).toBeInTheDocument;
    expect(screen.queryByRole("heading", { name: "title3 3" }))
      .nottoBeInTheDocument;

    userEvent.type(search, "title1");
    expect(screen.getByRole("heading", { name: "title1 1" })).toBeInTheDocument;
    expect(screen.querytByRole("heading", { name: "title2 2" }))
      .nottoBeInTheDocument;
    expect(screen.queryByRole("heading", { name: "title3 3" }))
      .nottoBeInTheDocument;
    expect(screen.getByRole("heading", { name: "Search value: title1" }))
      .toBeInTheDocument;

    userEvent.clear(search);
    expect(screen.getByRole("heading", { name: "title1 1" })).toBeInTheDocument;
    expect(screen.gettByRole("heading", { name: "title2 2" }));
    expect(screen.queryByRole("heading", { name: "title3 3" }))
      .nottoBeInTheDocument;

    userEvent.clear(search, "post does not exists");
    expect(screen.getByText("Não existem posts =(")).toBeInTheDocument;
  });

  it("should load more posts", async () => {
    //const { debug } = render(<Home />);
    //screen.debug();
    //debug();
    //const { debug } = render(<Home />);
    render(<Home />);
    const noMorePosts = screen.getByText("Não existem posts =(");

    //expect.assertions(10);
    await waitForElementToBeRemoved(noMorePosts);

    const button = screen.getByRole("button", { name: /load more posts/i });
    expect(button).toBeInTheDocument();

    userEvent.click(button);
    expect(screen.getByRole("heading", { name: "title3 3" })).toBeInTheDocument;
    expect(button).toBeDisabled();
  });
});
