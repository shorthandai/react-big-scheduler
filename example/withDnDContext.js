<<<<<<< HEAD
import * as React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend';

export default Component => {
  return props => (
    <DndProvider backend={HTML5Backend}>
      <Component {...props} />
    </DndProvider>
  )
}
=======
import * as React from "react";
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

export default (Component) => {
  return (props) => (
    <DndProvider backend={HTML5Backend}>
      <Component {...props} />
    </DndProvider>
  );
};
>>>>>>> f0e3c364a9f9976eafb37d2701f4c88a8aafc673
