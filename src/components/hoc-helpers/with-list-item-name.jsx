import React from "react"

export const withListItemName = (listItemNameRender) => (Wrapped) => (
    (props) => (
        <Wrapped {...props}>
            {listItemNameRender}
        </Wrapped>
    )
)