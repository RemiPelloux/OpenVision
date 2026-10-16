
/* Address: 0x180006720; Evidence: ev_40c0507af788d6e793defadf812aece4428a667b21ecb9c17ed7f3078e86d9f8 */

/* WARNING: Globals starting with '_' overlap smaller symbols at the same address */

void FUN_180006720(void)

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
  *(undefined8 *)(puVar3 + -8) = 0x18000674b;
  FUN_1800067f4((PCONTEXT)&DAT_180023ca0);
  _DAT_180023c10 = *(undefined8 *)(puVar3 + 0x38);
  _DAT_180023d38 = puVar3 + 0x40;
  _DAT_180023d20 = *(undefined8 *)(puVar3 + 0x40);
  _DAT_180023c00 = 0xc0000409;
  _DAT_180023c04 = 1;
  _DAT_180023c18 = 1;
  DAT_180023c20 = 2;
  *(undefined8 *)(puVar3 + 0x20) = DAT_180023000;
  *(undefined8 *)(puVar3 + 0x28) = DAT_180023040;
  *(undefined8 *)(puVar3 + -8) = 0x1800067ed;
  DAT_180023d98 = _DAT_180023c10;
  __raise_securityfailure((_EXCEPTION_POINTERS *)&PTR_DAT_180017508);
  return;
}

