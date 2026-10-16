
/* Address: 0x180016a60; Evidence: ev_c10e05ad2287e312694dc793687af0aab5dffb9c3fdc62ef301d03aee8a77781 */

void FUN_180016a60(uint param_1)

{
  if ((param_1 & 0x3f) != 0) {
    MXCSR = MXCSR | param_1 & 0x3f;
  }
  return;
}

