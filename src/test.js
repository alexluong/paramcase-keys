const test = require("ava")
const paramcaseKeys = require(".")

test("main", t => {
  t.true(paramcaseKeys({ fooBar: true })["foo-bar"])
})

test("exclude option", t => {
  t.true(paramcaseKeys({ "--": true }, { exclude: ["--"] })["--"])
  t.deepEqual(paramcaseKeys({ fooBar: true }, { exclude: [/^f/] }), { fooBar: true })
})

test("deep option", t => {
  t.deepEqual(
    paramcaseKeys(
      { foo_bar: true, obj: { one_two: false, arr: [{ three_four: true }] } },
      { deep: true },
    ),
    {
      "foo-bar": true,
      obj: { "one-two": false, arr: [{ "three-four": true }] },
    },
  )
})

test("handles nested arrays", t => {
  t.deepEqual(paramcaseKeys({ q_w_e: [["a", "b"]] }, { deep: true }), { "q-w-e": [["a", "b"]] })
})

test("accepts an array of objects", t => {
  t.deepEqual(paramcaseKeys([{ foo_bar: true }, { bar_foo: false }, { barFoo: "false" }]), [
    { "foo-bar": true },
    { "bar-foo": false },
    { "bar-foo": "false" },
  ])
})
