
/* Address: 0x180001610; Evidence: ev_5f687da7faa4d058b403440994a16d8709cb86737b9c48cfd883eb3ac639c671 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

void FUN_180001610(void)

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
  *(undefined8 *)(puVar3 + -8) = 0x18000163b;
  FUN_1800016e4((PCONTEXT)&DAT_180019b40);
  _DAT_180019ab0 = *(undefined8 *)(puVar3 + 0x38);
  _DAT_180019bd8 = puVar3 + 0x40;
  _DAT_180019bc0 = *(undefined8 *)(puVar3 + 0x40);
  _DAT_180019aa0 = 0xc0000409;
  _DAT_180019aa4 = 1;
  _DAT_180019ab8 = 1;
  DAT_180019ac0 = 2;
  *(undefined8 *)(puVar3 + 0x20) = DAT_180019000;
  *(undefined8 *)(puVar3 + 0x28) = DAT_180019040;
  *(undefined8 *)(puVar3 + -8) = 0x1800016dd;
  DAT_180019c38 = _DAT_180019ab0;
  __raise_securityfailure((_EXCEPTION_POINTERS *)&PTR_DAT_18000f458);
  return;
}

