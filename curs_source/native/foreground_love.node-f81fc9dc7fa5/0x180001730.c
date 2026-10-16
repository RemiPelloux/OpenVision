
/* Address: 0x180001730; Evidence: ev_ddb74ec548eca5b798c4d8cf1644e3488294fcd6fd5b470a559e844acc6050ea */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

void FUN_180001730(void)

{
  code *pcVar1;
  BOOL BVar2;
  undefined1 *puVar3;
  undefined1 auStack_38 [8];
  undefined1 auStack_30 [48];
  
  puVar3 = auStack_38;
  BVar2 = IsProcessorFeaturePresent(0x17);
  if (BVar2 != 0) {
    pcVar1 = (code *)swi(0x29);
    (*pcVar1)(2);
    puVar3 = auStack_30;
  }
  *(undefined8 *)(puVar3 + -8) = 0x18000175b;
  FUN_180001804((PCONTEXT)&DAT_18001ab40);
  _DAT_18001aab0 = *(undefined8 *)(puVar3 + 0x38);
  _DAT_18001abd8 = puVar3 + 0x40;
  _DAT_18001abc0 = *(undefined8 *)(puVar3 + 0x40);
  _DAT_18001aaa0 = 0xc0000409;
  _DAT_18001aaa4 = 1;
  _DAT_18001aab8 = 1;
  DAT_18001aac0 = 2;
  *(undefined8 *)(puVar3 + 0x20) = DAT_18001a000;
  *(undefined8 *)(puVar3 + 0x28) = DAT_18001a040;
  *(undefined8 *)(puVar3 + -8) = 0x1800017fd;
  DAT_18001ac38 = _DAT_18001aab0;
  __raise_securityfailure((_EXCEPTION_POINTERS *)&PTR_DAT_18000f448);
  return;
}

