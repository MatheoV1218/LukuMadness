import { useEffect, useRef } from "react";
import { track } from "@vercel/analytics/react";
import { LuX } from "react-icons/lu";
import { useOrder } from "./order/orderContext";
import type { MenuItem } from "../data/menuData";

type Props = {
  item: MenuItem | null;
  onClose: () => void;
};

/** Enlarged photo + details for a menu item. */
const MenuItemDialog = ({ item, onClose }: Props) => {
  const ref = useRef<HTMLDialogElement>(null);
  const { openOrder } = useOrder();

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (item && !dialog.open) dialog.showModal();
    if (!item && dialog.open) dialog.close();
  }, [item]);

  return (
    <dialog
      ref={ref}
      className="item-dialog"
      aria-labelledby="item-dialog-title"
      onClose={onClose}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {item && (
        <div className="item-dialog__panel">
          <button type="button" className="item-dialog__close" onClick={onClose} aria-label="Close">
            <LuX aria-hidden />
          </button>
          <img src={item.image} alt={item.name} className="item-dialog__img" />
          <div className="item-dialog__body">
            <div className="item-dialog__row">
              <h2 id="item-dialog-title">{item.name}</h2>
              <span className="item-dialog__price">{item.price}</span>
            </div>
            {item.description && <p>{item.description}</p>}
            <button
              type="button"
              className="btn btn--honey btn--block"
              onClick={() => {
                track("order_button_menu_item", { page: "/menu", item: item.name });
                onClose();
                openOrder("menu_item");
              }}
            >
              Order Online
            </button>
          </div>
        </div>
      )}
    </dialog>
  );
};

export default MenuItemDialog;
