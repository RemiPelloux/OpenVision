
/* Address: 0x180015ea0; Evidence: ev_1cd62041123241b1899e8a7de414aca386f4e06debf2e8edd5c7fa7b94e61760 */

uint FUN_180015ea0(void)

{
  uint uVar1;
  
  uVar1 = (((MXCSR & 0x3f) >> 2 & 8 | MXCSR & 0x10) >> 2 | MXCSR & 8) >> 1 |
          ((MXCSR & 2) << 3 | MXCSR & 4) * 2 | (MXCSR & 1) << 4;
  return uVar1 << 0x18 | uVar1;
}

