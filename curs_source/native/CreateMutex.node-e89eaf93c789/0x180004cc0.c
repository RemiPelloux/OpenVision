
/* Address: 0x180004cc0; Evidence: ev_018e71670289489e498a58442ddf1f31fa1cf81cafabbb3c5a40b994f9287023 */

void FUN_180004cc0(void)

{
  code *pcVar1;
  
  FUN_180005e40(0x18001e098);
  pcVar1 = (code *)swi(3);
  (*pcVar1)();
  return;
}

