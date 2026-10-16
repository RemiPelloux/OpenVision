
/* Address: 0x180001ae4; Evidence: ev_d639198dd8830bf996020b2573327e1b21d6e62622c6feb7a559c286af82f534 */

ulonglong FUN_180001ae4(int param_1)

{
  ulonglong uVar1;
  undefined8 uVar2;
  
  if (param_1 == 0) {
    DAT_18001b040 = 1;
  }
  FUN_180001e74();
  uVar1 = __vcrt_initialize();
  if ((char)uVar1 != '\0') {
    uVar2 = FUN_18000599c();
    if ((char)uVar2 != '\0') {
      return CONCAT71((int7)((ulonglong)uVar2 >> 8),1);
    }
    uVar1 = __vcrt_uninitialize('\0');
  }
  return uVar1 & 0xffffffffffffff00;
}

