
/* Address: 0x180013344; Evidence: ev_75df908c1be5da680823f725ec4d47c9d574141f323e80eb26fa0923b05954ec */

/* WARNING: Enum "SectionFlags": Some values do not have unique names */

longlong FUN_180013344(dword *param_1,SectionFlags *param_2)

{
  IMAGE_SECTION_HEADER *pIVar1;
  uint uVar2;
  
  uVar2 = 0;
  pIVar1 = &IMAGE_SECTION_HEADER_180000210;
  while ((0x26000 < (uint)pIVar1->VirtualAddress ||
         (pIVar1->VirtualAddress + (pIVar1->Misc).PhysicalAddress < 0x26001))) {
    uVar2 = uVar2 + 1;
    pIVar1 = pIVar1 + 1;
    if (7 < uVar2) {
      return 0;
    }
  }
  *param_1 = (pIVar1->Misc).PhysicalAddress;
  *param_2 = pIVar1->Characteristics;
  return (ulonglong)(uint)pIVar1->VirtualAddress + 0x180000000;
}

