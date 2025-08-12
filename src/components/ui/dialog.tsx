import { CloseButton, Dialog, Portal, type ConditionalValue } from "@chakra-ui/react";

interface DialogWrapperProps {
  title: string;
  body: React.ReactNode;
  actions?: React.ReactNode;
  trigger: React.ReactNode;
  onClose?: () => void;
  size?: ConditionalValue<"sm" | "md" | "lg" | "xl" | "xs" | "full" | "cover" | undefined>;
}

export const DialogWrapper = ({ title, body, actions, trigger, size }: DialogWrapperProps) => (
  <Dialog.Root size={size}>
    <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
    <Portal>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>{title}</Dialog.Title>
          </Dialog.Header>
          <Dialog.Body>{body}</Dialog.Body>
          {actions && <Dialog.Footer>{actions}</Dialog.Footer>}
          <Dialog.CloseTrigger asChild>
            <CloseButton size="sm" />
          </Dialog.CloseTrigger>
        </Dialog.Content>
      </Dialog.Positioner>
    </Portal>
  </Dialog.Root>
);
