import { useEffect } from "react";
import { Sun, Moon } from "react-feather";
import styled from "styled-components";

interface ThemeToggleProps {
  text?: boolean;
  isDark?: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
  icon: boolean;
  className: string;
}

const ThemeToggle = (props: ThemeToggleProps) => {

  const { text, isDark, setIsDark, icon, className } = props


  useEffect(() => {
    setIsDark(document.body.classList.contains("dark"));
  }, []);


  useEffect(() => {
    if (!isDark) {
      document.body.classList.add("dark");
      window.localStorage.setItem("ShoppingAppTheme", "dark");
    } else {
      document.body.classList.remove("dark");
      window.localStorage.setItem("ShoppingAppTheme", "light");
    }
  }, [isDark]);

  return (
    <Container
      className={`${className} themeToggle`}
      onClick={() => setIsDark(!isDark)}
    >
      {icon && (
        <> {isDark ? <Sun className="sun" /> : <Moon className="moon" />} </>
      )}
      {text && "Switch Theme"}
    </Container>
  );
};

export default ThemeToggle;

const Container = styled.div`
  display: grid;
  place-items: center;
  height: fit-content;
  cursor: pointer;
`;
