export const strengthTabData = {
  info: {
    format: "OK JSON Received",
    timestamp: "17 August 2023 19:26:18",
  },
  load_combo: {
    lc1: {
      value: "2.2 (D+EH+EV+Hsu)",
      is_check: true,
      is_valid: true,
      controlling: true,
    },
    lc2: {
      value: "1.6 (D+EH+EV+HSU+Esn)",
      is_check: true,
      is_valid: true,
      controlling: false,
    },
    lc3: {
      value: "1.6 (D+EH+EV+HSn)",
      is_check: true,
      is_valid: true,
      controlling: false,
    },
    lc4: {
      value: "1.2D+1.5EH+1.35EV+1.0Hsu+1.25EQ",
      is_check: true,
      is_valid: true,
      controlling: false,
    },
    lc5: {
      value: "1.2D+1.5EH+1.35EV+1.3Hsx",
      is_check: true,
      is_valid: true,
      controlling: false,
    },
  },
  summary: {
    summary:
      "All checks passed! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    check: true,
    issues: 0,
  },
  results: {
    design_of_stem: {
      controlling_case: 4,
      lc_1: {
        horizontal_moment: {
          max_positive: 0.22,
          max_negative: 0.8,
          shear: 0.89,
        },
        vertical_moment: {
          max_positive: 0.65,
          max_negative: 0.79,
          shear: 0.84,
        },
        shear_friction: 0.28,
      },
      lc_2: {
        horizontal_moment: {
          max_positive: 0.45,
          max_negative: 0.9,
          shear: 0.21,
        },
        vertical_moment: {
          max_positive: 0.87,
          max_negative: 0.93,
          shear: 0.9,
        },
        shear_friction: 0.33,
      },
      lc_3: {
        horizontal_moment: {
          max_positive: 0.77,
          max_negative: 0.24,
          shear: 0.51,
        },
        vertical_moment: {
          max_positive: 0.7,
          max_negative: 0.85,
          shear: 0.22,
        },
        shear_friction: 0.24,
      },
      lc_4: {
        horizontal_moment: {
          max_positive: 0.45,
          max_negative: 0.82,
          shear: 0.29,
        },
        vertical_moment: {
          max_positive: 0.84,
          max_negative: 0.71,
          shear: 0.56,
        },
        shear_friction: 0.98,
      },
      lc_5: {
        horizontal_moment: {
          max_positive: 0.25,
          max_negative: 0.69,
          shear: 0.23,
        },
        vertical_moment: {
          max_positive: 0.91,
          max_negative: 0.97,
          shear: 0.3,
        },
        shear_friction: 0.62,
      },
    },
    design_of_heel: {
      controlling_case: 3,
      lc_1: {
        longitudinal: 0.55,
        horizontal: 0.87,
        shear: 0.21,
      },
      lc_2: {
        longitudinal: 0.81,
        horizontal: 0.81,
        shear: 0.52,
      },
      lc_3: {
        longitudinal: 0.23,
        horizontal: 0.47,
        shear: 0.73,
      },
      lc_4: {
        longitudinal: 0.71,
        horizontal: 0.9,
        shear: 0.95,
      },
      lc_5: {
        longitudinal: 0.24,
        horizontal: 0.38,
        shear: 0.91,
      },
    },
    design_of_toe: {
      controlling_case: 2,
      lc_1: {
        moment: 0.99,
        shear: 0.28,
      },
      lc_2: {
        moment: 0.95,
        shear: 0.29,
      },
      lc_3: {
        moment: 0.83,
        shear: 0.93,
      },
      lc_4: {
        moment: 0.77,
        shear: 0.92,
      },
      lc_5: {
        moment: 0.93,
        shear: 0.51,
      },
    },
    design_of_shear_key: {
      controlling_case: 2,
      lc_1: {
        moment: 0.24,
        shear: 0.35,
        shear_friction: 0.96,
      },
      lc_2: {
        moment: 0.69,
        shear: 0.93,
        shear_friction: 0.95,
      },
      lc_3: {
        moment: 0.85,
        shear: 0.73,
        shear_friction: 0.95,
      },
      lc_4: {
        moment: 0.67,
        shear: 0.27,
        shear_friction: 0.7,
      },
      lc_5: {
        moment: 0.28,
        shear: 0.41,
        shear_friction: 0.43,
      },
    },
    design_of_buttress: {
      controlling_case: 1,
      lc_1: {
        tension_check: 0.27,
      },
      lc_2: {
        tension_check: 0.33,
      },
      lc_3: {
        tension_check: 0.28,
      },
      lc_4: {
        tension_check: 0.36,
      },
      lc_5: {
        tension_check: 0.65,
      },
    },
  },
};
