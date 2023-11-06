import { render, screen } from "@testing-library/react";
import App from "../App";
import user from "@testing-library/user-event";

test("測試 App.tsx 頁面是否正常運作", async () => {
  render(<App />);

  expect(true).toBeTruthy();
});

test("測試 App.tsx 的按鈕文字顯示是否正常", async () => {
  render(<App />);

  const button = await screen.findByRole("button");

  const count = screen.queryByText(/The count is greater then 0/);
  expect(count).not.toBeInTheDocument();

  await user.click(button);
  await user.click(button);

  expect(screen.queryByText(/The count is greater then 1/)).toBeInTheDocument();
});
