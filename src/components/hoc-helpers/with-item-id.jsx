import React, { useState } from "react";

// Добавляет логику для компонента типа Content
// Параметр itemId передается из List в Detail  

export const withItemId = (Wrapped) => (props) => {
    const [itemId, setItemId] = useState(null);
    return <Wrapped {...props} onSelectItem={setItemId} itemId={itemId} />
}