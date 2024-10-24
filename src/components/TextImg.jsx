// Component for making a text/img or img/text section
import styles from "./TextImg.module.css";
import styled from "styled-components"; //This will help us get rid of the inline styling

export default function TextImg({
  image,
  headerOne,
  headerTwo,
  pText,
  imgPosition = "left",
  textPosition = "center", // Optional text possitioning
  backgroundColor = "transparent", // Optional bg color
  headerOneColor = "#580030", // Optional h1 color
  headerTwoColor = "#FF1935", // Optional h2 color
}) {
  //Here we are styling the container and h1/h2 tags
  // These styled-components can be kept in a separate file and impoted by the components that need them
  // That way we can keep the code even cleaner
  const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 64px;
    margin-top: 100px;
    width: 100%;
    background-color: ${backgroundColor};
    ${imgPosition === "right" ? "" : "flex-direction: row-reverse"}
  `;

  const HeaderOne = styled.h1`
    width: 354px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 39px;
    margin: 0px;

    color: #580030;

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    color: ${headerOneColor};
  `;

  const HeaderTwo = styled.h2`
    width: 354px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 39px;
    margin: 0px;

    color: #580030;

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    color: ${headerTwoColor};
  `;

  return (
    <StyledContainer>
      <section className={`${styles.textsection} ${styles[textPosition]}`}>
        <div className={styles.headings}>
          <HeaderOne>{headerOne}</HeaderOne>
          <HeaderTwo>{headerTwo}</HeaderTwo>
        </div>
        <p className={styles.ptext}>{pText}</p>
      </section>

      <img className={styles.textimg} src={image} />
    </StyledContainer>
  );
}
// Here I am reversing the row direction in the container to swtich the image between left and right
// I think the code looks cleaner this way
