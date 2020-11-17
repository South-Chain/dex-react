import styled, { ThemedStyledProps } from 'styled-components'
import { ColourTheme, ThemeType } from 'styles/theme'

const { MAIN, SECONDARY } = ThemeType

interface ButtonBaseProps {
  // $alt button theme toggle
  $alt?: boolean
  $border?: boolean
  theme: ThemedStyledProps<ColourTheme, ColourTheme>
}

export const ButtonBase = styled.button.attrs(({ $alt, $border, theme }: ButtonBaseProps) => ({
  // Allow toggling buttons as ALT/MAIN and grab appropriate theme
  button: theme.button[$alt ? SECONDARY : MAIN],
  $border,
}))`
  border: 0.1rem solid;
  border-color: ${({ $border, button }): string => ($border ? button.text1 : 'transparent')};
  background-color: ${({ button }): string => button.bg1};
  color: ${({ button }): string => button.text1};

  &:hover {
    border-color: ${({ button }): string => button.bg1Hover};
    background-color: ${({ button }): string => button.bg1Hover};
    color: ${({ button }): string => button.text1Hover};
  }

  border-radius: 2rem;
  cursor: pointer;
  font-weight: bold;
  outline: 0;
  padding: 0.5rem 1rem;

  transition: all 0.2s ease-in-out;
  transition-property: color, background-color, border-color, opacity;

  &.cancel {
    background: transparent;
    color: var(--color-text-active);

    &:hover {
      background-color: var(--color-background-button-hover);
      color: var(--color-text-button-hover);
    }
  }

  &:disabled,
  &[disabled] {
    &:hover {
      background-color: var(--color-background-button-disabled-hover);
    }
    opacity: 0.35;
    pointer-events: none;
  }

  &.success {
    border-color: var(--color-button-success);
    color: var(--color-button-success);
    :hover {
      background-color: var(--color-button-success);
      border-color: var(--color-button-success);
      color: var(--color-background-pageWrapper);
    }
  }

  &.danger {
    border-color: var(--color-button-danger);
    color: var(--color-button-danger);
    :hover {
      background-color: var(--color-button-danger);
      border-color: var(--color-button-danger);
      color: var(--color-background-pageWrapper);
    }
  }

  &.secondary {
    border-color: var(--color-button-secondary);
    color: var(--color-button-secondary);
    :hover {
      border-color: black;
      color: black;
    }
  }

  &.big {
    font-size: 1.2rem;
    padding: 0.65rem 1rem;
  }

  &.small {
    font-size: 0.6rem;
    padding: 0.3rem 0.5rem;
  }
`