const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });

  it("Books names should be sorted when values are in reverse order", () => {
    expect(
      sorting.sortByName([
        "Волшебник изумрудного города",
        "Властелин Колец",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
    ]);
  });

  it("Books names should keep order for equal values ignoring case", () => {
    expect(sorting.sortByName(["JavaScript", "javascript"])).toEqual([
      "JavaScript",
      "javascript",
    ]);
  });
});