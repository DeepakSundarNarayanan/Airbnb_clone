// Import necessary dependencies and components
import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

import Button from "../Button";

// Define the props for the Modal component
interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

// Define the Modal component
const Modal: React.FC<ModalProps> = ({ 
  isOpen, 
  onClose, 
  onSubmit, 
  title, 
  body, 
  actionLabel, 
  footer, 
  disabled,
  secondaryAction,
  secondaryActionLabel
}) => {
  // State to manage the visibility of the modal
  const [showModal, setShowModal] = useState(isOpen);

  // Effect to update the modal visibility based on isOpen prop
  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  // Callback to handle the modal close
  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
  
    setShowModal(false);
    // Delay the onClose to allow for a smooth animation
    setTimeout(() => {
      onClose();
    }, 300)
  }, [onClose, disabled]);

  // Callback to handle the modal submission
  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [onSubmit, disabled]);

  // Callback to handle the secondary action (if available)
  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [secondaryAction, disabled]);

  // Return null if the modal is not open
  if (!isOpen) {
    return null;
  }

  // Render the Modal component
  return (
    <>
      <div
        className="
          justify-center 
          items-center 
          flex 
          overflow-x-hidden 
          overflow-y-auto 
          fixed 
          inset-0 
          z-50 
          outline-none 
          focus:outline-none
          bg-neutral-800/70
        "
      >
        <div className="
          relative 
          w-full
          md:w-4/6
          lg:w-3/6
          xl:w-2/5
          my-6
          mx-auto 
          h-full 
          lg:h-auto
          md:h-auto
          "
        >
          {/* Modal content */}
          <div className={`
            translate
            duration-300
            h-full
            ${showModal ? 'translate-y-0' : 'translate-y-full'}
            ${showModal ? 'opacity-100' : 'opacity-0'}
          `}>
            <div className="
              translate
              h-full
              lg:h-auto
              md:h-auto
              border-0 
              rounded-lg 
              shadow-lg 
              relative 
              flex 
              flex-col 
              w-full 
              bg-white 
              outline-none 
              focus:outline-none
            "
            >
              {/* Modal header */}
              <div className="
                flex 
                items-center 
                p-6
                rounded-t
                justify-center
                relative
                border-b-[1px]
                "
              >
                <button
                  className="
                    p-1
                    border-0 
                    hover:opacity-70
                    transition
                    absolute
                    left-9
                  "
                  onClick={handleClose}
                >
                  <IoMdClose size={18} />
                </button>
                <div className="text-lg font-semibold">
                  {title}
                </div>
              </div>
              {/* Modal body */}
              <div className="relative p-6 flex-auto">
                {body}
              </div>
              {/* Modal footer */}
              <div className="flex flex-col gap-2 p-6">
                <div 
                  className="
                    flex 
                    flex-row 
                    items-center 
                    gap-4 
                    w-full
                  "
                >
                  {/* Secondary action button */}
                  {secondaryAction && secondaryActionLabel && (
                    <Button 
                      disabled={disabled} 
                      label={secondaryActionLabel} 
                      onClick={handleSecondaryAction}
                      outline
                    />  
                  )}
                  {/* Primary action button */}
                  <Button 
                    disabled={disabled} 
                    label={actionLabel} 
                    onClick={handleSubmit}
                  />
                </div>
                {/* Additional footer content */}
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Export the Modal component as the default export
export default Modal;
