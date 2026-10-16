
/* Address: 0x180001e80; Evidence: ev_cfd008b0ae1afd155f271bdb4eea67c6774bbb69373e38c16b20688cae7783d7 */

undefined1 (*) [32] FUN_180001e80(longlong param_1)

{
  undefined1 (*pauVar1) [32];
  
  pauVar1 = FUN_180001c80(param_1);
  if (0xf < *(ulonglong *)(*pauVar1 + 0x18)) {
    pauVar1 = *(undefined1 (**) [32])*pauVar1;
  }
  return pauVar1;
}

