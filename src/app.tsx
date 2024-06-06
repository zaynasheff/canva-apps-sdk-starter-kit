import React from "react";
import { requestExport } from "@canva/design";
import styles from "styles/components.css";
import { Button, Rows, Text } from "@canva/app-ui-kit";

export function App() {

  console.log('test react');

    async function handleClick() {
    const result = await requestExport({
      acceptedFileTypes: ["VIDEO"],
    });

    console.log(result);
   
  }

  return (
    <div className={styles.scrollContainer}>
      <Rows spacing="2u">
      <Button variant="primary"  onClick={handleClick} stretch>Export design</Button>
      </Rows>
    </div>
  );
}