import React from "react";
import Button from "../components/Button";
import Flex from "../components/Flex";

export function Courses() {
  return (
    <Flex>
      <Button buttonTitle="Courses" />
    </Flex>
  );
}

export function OnClickTest() {
  return (
    <Flex>
      <Button buttonTitle="Courses" onClick={() => {console.log('onClick')}}/>
    </Flex>
  );
}

export function Inspiration() {
  return (
    <Flex>
      <Button buttonTitle="Inspiration" />
    </Flex>
  );
}

export function Multiple() {
  return (
    <Flex>
      <Button buttonTitle="Courses" />
      <Button buttonTitle="Inspiration" />
    </Flex>
  );
}

export function NavButtons() {
  return (
    <Flex>
      <Button buttonTitle="Inspiration" />
      <Button buttonTitle="Courses" />
      <Button buttonTitle="Horoscopes" />
      <Button buttonTitle="Gift Shop" />
      <Button buttonTitle="Sign Up" />
    </Flex>
  );
}

const StoryForBtn = {
  title: "Button",
  component: Button
};

export default StoryForBtn;
