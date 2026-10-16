
/* Address: 0x180004a20; Evidence: ev_1684a7508d2e94e40a5f86f4055bcc35b8cbe7ee068e963f65f40a1cfd985414 */

void FUN_180004a20(void)

{
  code *pcVar1;
  
  FUN_180005bc0(0x18001d050);
  pcVar1 = (code *)swi(3);
  (*pcVar1)();
  return;
}

