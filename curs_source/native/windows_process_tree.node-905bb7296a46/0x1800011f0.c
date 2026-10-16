
/* Address: 0x1800011f0; Evidence: ev_08fc060e3cee53590afab81888ffac827ae5dbd7fe3ae07bde9487ace9e6eb13 */

void FUN_1800011f0(void)

{
  code *pcVar1;
  
  FUN_180007210(0x18001edc8);
  pcVar1 = (code *)swi(3);
  (*pcVar1)();
  return;
}

