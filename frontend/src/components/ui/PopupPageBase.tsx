import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

import PageTransition from "@components/ui/PageTransition";
import { useHistory } from "@hooks/useHistory";

interface PopupPageBaseProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const PopupPageBase = ({ isOpen, onClose, children }: PopupPageBaseProps) => {
	const { push, remove } = useHistory();
	const onCloseRef = useRef(onClose);
	const hasBeenPushedRef = useRef(false);
	const isClosingRef = useRef(false);
	
	useEffect(() => {
		onCloseRef.current = onClose;
	}, [onClose]);

	useEffect(() => {
		if (isOpen && !hasBeenPushedRef.current) {
			const wrappedOnClose = () => {
				isClosingRef.current = true;
				onCloseRef.current();
			};
			push(wrappedOnClose);
			hasBeenPushedRef.current = true;
		}
	}, [isOpen, push]);

	useEffect(() => {
		return () => {
			if (hasBeenPushedRef.current && !isClosingRef.current) {
				remove();
			}
		};
	}, [remove]);

	return (
		<PageTransition isOpen={isOpen} onClose={onClose}>
			{children}
		</PageTransition>
	);
};

export default PopupPageBase;
