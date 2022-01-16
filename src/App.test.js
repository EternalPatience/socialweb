import SocialWeb from "./App";
import ReactDOM from "react-dom";


test('renders without crushing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SocialWeb/>, div)
  ReactDOM.unmountComponentAtNode(div)
});
