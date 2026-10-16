
/* Address: 0x180019800; Evidence: ev_436891f013c93b845a740ab89b09b190b1ef34ff91de244623cf3140567afcb5 */

void FUN_180019800(undefined8 param_1,longlong param_2)

{
  if ((*(uint *)(param_2 + 0x3c) & 1) != 0) {
    *(uint *)(param_2 + 0x3c) = *(uint *)(param_2 + 0x3c) & 0xfffffffe;
    FUN_180005720(*(longlong **)(param_2 + 0x60));
  }
  return;
}

