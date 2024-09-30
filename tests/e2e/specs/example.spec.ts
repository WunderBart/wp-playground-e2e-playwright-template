import { test, expect } from "@wordpress/e2e-test-utils-playwright";

test.describe("WordPress", () => {
  test("can open the dashboard", async ({ page }) => {
    await page.goto("/wp-admin");

    await expect(
      page.getByRole("heading", { name: "Dashboard" }),
    ).toBeVisible();
  });
});

test.describe("Gutenberg", () => {
  test("can publish a post", async ({ page, admin, editor }) => {
    await admin.createNewPost();

    await editor.canvas.getByLabel("Add title").fill("Hello World");

    await editor.insertBlock({ name: "core/quote" });
    await editor.canvas
      .getByLabel("Block: Quote")
      .getByLabel(/Empty block/)
      .fill("Lorem ipsum dolor sit amet");

    await page.getByRole("button", { name: "Publish", exact: true }).click();

    const publishPanel = page.getByLabel("Editor publish");
    await publishPanel
      .getByRole("button", { name: "Publish", exact: true })
      .click();
    await publishPanel.getByRole("link", { name: "View Post" }).click();

    await expect(page.locator("body")).toContainText(
      "Lorem ipsum dolor sit amet",
    );
  });
});
