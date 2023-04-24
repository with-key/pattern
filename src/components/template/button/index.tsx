import { styled } from "@/styles/stitches.config";

// common styles
const BaseButton = styled("button", {
  display: "flex",
  ai: "center",
  jc: "center",

  variants: {
    shape: {
      big01: {
        height: 60,
        width: "100%",
      },

      big02: {
        height: 52,
        width: "100%",

        borderRadius: 10,
      },

      big01Half: {
        height: 60,
        width: 188,
      },

      big02Half: {
        height: 52,
        width: 153,

        borderRadius: 7,
      },

      middle: {
        height: 40,
        width: 271,
        borderRadius: 10,
      },

      small01: {
        height: 40,
        width: 130,
        borderRadius: 10,
      },

      small02: {
        height: 40,
        width: 90,
        borderRadius: 10,
      },

      small03: {
        height: 40,
        width: 70,
        borderRadius: 10,
      },
    },
  },

  defaultVariants: {
    shape: "big01",
  },
});

// primary button style
export const Primary = styled(BaseButton, {
  bc: "$blue500",
  color: "white",

  "&:active": {
    bc: "$blue600",
  },

  "&:disabled": {
    bc: "$gary05",
  },

  defaultVariants: {
    shape: "small02",
  },
});

// secondary button style
export const Secondary = styled(BaseButton, {
  bc: "$blue200",
  color: "$blue500",

  "&:active": {
    bc: "$blue300",
  },

  "&:disabled": {
    bc: "$gary03",
  },
});

// reject button style
export const Reject = styled(BaseButton, {
  bc: "$gary06",
  color: "white",

  "&:active": {
    bc: "$gary07",
  },

  "&:disabled": {
    bc: "$gary03",
    color: "$gary06",
  },
});

// unset button style
export const Unset = styled("button", {
  all: "unset",
});
