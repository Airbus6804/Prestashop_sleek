import OutfitCardsGrid from "./OutfitCard/OutfitCardsGrid";
import ManageOutfitPage from "./ManageOutfitPage/ManageOutfit";
import { Pages } from "../redux/page";
import { useSelector } from "react-redux";
import { Store } from "../redux/store";

export default function () {
    const page = useSelector<Store, Pages>((state) => state.page);

    const pages = {
        [Pages.OutfitsGrid]: <OutfitCardsGrid />,
        [Pages.ManageOutfit]: <ManageOutfitPage />,
        [Pages.NewOutfit]: <ManageOutfitPage />,
    };


    return (
        <div className="flex flex-col text-left">
            <h1 className="font-extrabold text-4xl">Sleek Outfits</h1>
            <p>Manage your outfits!!!</p>
            {pages[page]}
        </div>
    );
}
