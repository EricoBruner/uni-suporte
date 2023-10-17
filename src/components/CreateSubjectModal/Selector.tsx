import Downshift from "downshift";
import styled from "styled-components";
import { BiDownArrow } from "react-icons/bi";

const StyledComboBox = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
`;

const StyledInputContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  background-color: white;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
`;

const StyledInput = styled.input`
  width: 500px;
  height: 40px;
  padding-left: 20px;
  border: none;
  outline: none;

  &::placeholder {
    color: #292929;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }
`;

const StyledToggleButton = styled.button`
  padding-right: 10px;
  background: ${(props: any) => (props.selected ? "#27658C" : "none")};
  border: none;
  cursor: pointer;
`;

const StyledList = styled.ul`
  position: absolute;
  width: 500px;
  background-color: white;
  margin-top: 45px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  max-height: 20rem;
  overflow-y: scroll;
  padding: 0;
  z-index: 10;
`;

const StyledListItem = styled.li`
  padding: 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  background-color: ${(props: any) =>
    props.highlighted ? "#c3dafe" : "white"};
  color: #292929;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`;

function Selector({ setItem, data, placeholder }: any) {
  const handleSelection = (item: any) => {
    setItem(item);
  };

  return (
    <Downshift
      itemToString={(item) => (item ? item.name : "")}
      onSelect={handleSelection}
    >
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        isOpen,
        getToggleButtonProps,
        inputValue,
        highlightedIndex,
        selectedItem,
      }) => (
        <div>
          <StyledComboBox>
            <StyledInputContainer>
              <StyledInput placeholder={placeholder} {...getInputProps()} />
              <StyledToggleButton {...getToggleButtonProps()}>
                <BiDownArrow size={"20px"} />
              </StyledToggleButton>
            </StyledInputContainer>
            <StyledList {...getMenuProps()}>
              {isOpen &&
                data
                  .filter(
                    (item: any) =>
                      !inputValue ||
                      item.name.toLowerCase().includes(inputValue.toLowerCase())
                  )
                  .map((item: any, index: number) => (
                    <StyledListItem
                      key={item.name}
                      {...getItemProps({
                        index,
                        item,
                        highlighted: highlightedIndex === index,
                        selected: selectedItem === item,
                      })}
                    >
                      <span>{item.name}</span>
                    </StyledListItem>
                  ))}
            </StyledList>
          </StyledComboBox>
        </div>
      )}
    </Downshift>
  );
}

export default Selector;
