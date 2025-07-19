import { CoverflowCarousel } from '..';

const MenuSectionMap = ({ recipes, setShoppingList }) => {

    return (
        <CoverflowCarousel
            recipes={recipes}
            setShoppingList={setShoppingList}
        />
    );
}

export default MenuSectionMap;