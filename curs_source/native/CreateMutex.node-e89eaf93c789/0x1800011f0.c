
/* Address: 0x1800011f0; Evidence: ev_f282587a55bc3060cab187f4c20ce037f96b001d99b423ecdf10770b1ace7a49 */

void FUN_1800011f0(void)

{
  code *pcVar1;
  
  FUN_180005e40(0x18001dd98);
  pcVar1 = (code *)swi(3);
  (*pcVar1)();
  return;
}

