
/* Address: 0x1800169c0; Evidence: ev_988eecce18ce2f1147d918a3da6e4b9b7b95a0ec047ff77364d6269f48b36729 */

uint FUN_1800169c0(uint param_1,uint param_2)

{
  uint uVar1;
  
  uVar1 = MXCSR;
  MXCSR = (~param_2 | 0xffff807f) & MXCSR | param_1 & param_2;
  if ((DAT_180027a70 != '\0') && ((MXCSR & 0x40) != 0)) {
    return uVar1;
  }
  MXCSR = MXCSR & 0xffffffbf;
  return uVar1;
}

