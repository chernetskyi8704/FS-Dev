import Link from "../Link";

interface INavigationItem {
  name: string;
  link: string;
  onClick?: () => void;
  style: {
    backgroundColor: string;
    textColor: string;
  };
}
interface NavigationItemProps {
  item: INavigationItem;
}

const NavigationItem = ({ item }: NavigationItemProps) => {
  return (
    <li>
      <Link to={item.link} style={item.style} onClick={item.onClick}>
        {item.name}
      </Link>
    </li>
  );
};

export default NavigationItem;
