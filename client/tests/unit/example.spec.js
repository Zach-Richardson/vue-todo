import { shallowMount } from "@vue/test-utils";
import Todo from "@/components/Todo.vue";

describe("Todo.vue", () => {
  it("renders props.todo when passed", () => {
    const todo = {
      id: 1,
      name: "Something to Do",
      description: "This is something I need to do"
    };
    const wrapper = shallowMount(Todo, {
      propsData: { todo }
    });
    expect(wrapper.props().todo.description).toMatch(todo.description);
  });
});
