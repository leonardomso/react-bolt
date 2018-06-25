import React from "react";
import { shallow } from "enzyme";
import App from "../../components/App";

describe("App", () => {
    test("Rendering the simple component", () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toMatchSnapshot();
    });
});
