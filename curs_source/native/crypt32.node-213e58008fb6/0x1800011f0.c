
/* Address: 0x1800011f0; Evidence: ev_cfd26afcc5a33969a37fef9648f1bf181331ed503fb3264c68c2686d84304b99 */

void FUN_1800011f0(void)

{
  code *pcVar1;
  
  FUN_180005bc0(0x18001cda8);
  pcVar1 = (code *)swi(3);
  (*pcVar1)();
  return;
}

