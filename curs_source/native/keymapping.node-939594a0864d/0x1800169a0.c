
/* Address: 0x1800169a0; Evidence: ev_dcc57f137979a649099641f3e3d1c3ffdee6ff9e5128bf63c82b146f6613d313 */

uint FUN_1800169a0(void)

{
  uint uVar1;
  
  uVar1 = MXCSR;
  MXCSR = MXCSR & 0xffffffc0;
  return uVar1 & 0x3f;
}

