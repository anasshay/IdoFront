import React from "react";
import { colors } from "../../config/styles";
import {
  CardContent,
  CardTitle,
  LeftContent,
  RightContent,
  TableColumnWrapper,
  TableContent,
  TableTitle,
  Title,
  TitleImage,
} from "./styles";

function TableColumn() {
  return (
    <TableColumnWrapper>
      <TableTitle
        backgroundColor={colors.backgroundColors.TableCardsBackgroundColor}
      >
        <TitleImage src="https://via.placeholder.com/150" />
        <Title>Title</Title>
      </TableTitle>

      <TableContent
        backgroundColor={colors.backgroundColors.TableCardsBackgroundColor}
      >
        <CardTitle>Title</CardTitle>
        <CardContent>
          <LeftContent>
            <h4>Category</h4>
            <h4>Due Date</h4>
            <h4>Estimate</h4>
            <h4>Importance</h4>
          </LeftContent>
          <RightContent>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
          </RightContent>
        </CardContent>
      </TableContent>
      <TableContent
        backgroundColor={colors.backgroundColors.TableCardsBackgroundColor}
      >
        <CardTitle>Title</CardTitle>
        <CardContent>
          <LeftContent>
            <h4>Category</h4>
            <h4>Due Date</h4>
            <h4>Estimate</h4>
            <h4>Importance</h4>
          </LeftContent>
          <RightContent>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
          </RightContent>
        </CardContent>
      </TableContent>
      <TableContent
        backgroundColor={colors.backgroundColors.TableCardsBackgroundColor}
      >
        <CardTitle>Title</CardTitle>
        <CardContent>
          <LeftContent>
            <h4>Category</h4>
            <h4>Due Date</h4>
            <h4>Estimate</h4>
            <h4>Importance</h4>
          </LeftContent>
          <RightContent>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
          </RightContent>
        </CardContent>
      </TableContent>
      <TableContent
        backgroundColor={colors.backgroundColors.TableCardsBackgroundColor}
      >
        <CardTitle>Title</CardTitle>
        <CardContent>
          <LeftContent>
            <h4>Category</h4>
            <h4>Due Date</h4>
            <h4>Estimate</h4>
            <h4>Importance</h4>
          </LeftContent>
          <RightContent>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
          </RightContent>
        </CardContent>
      </TableContent>
    </TableColumnWrapper>
  );
}

export default TableColumn;
