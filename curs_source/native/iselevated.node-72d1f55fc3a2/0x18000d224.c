
/* Address: 0x18000d224; Evidence: ev_e6a7a6575250ae878c43145ccc7c23692c0b7308cac791b36bf222d7b429873d */

/* WARNING: Enum "SectionFlags": Some values do not have unique names */

longlong FUN_18000d224(dword *param_1,SectionFlags *param_2)

{
  IMAGE_SECTION_HEADER *pIVar1;
  uint uVar2;
  
  uVar2 = 0;
  pIVar1 = &IMAGE_SECTION_HEADER_180000218;
  while ((0x1c000 < (uint)pIVar1->VirtualAddress ||
         (pIVar1->VirtualAddress + (pIVar1->Misc).PhysicalAddress < 0x1c001))) {
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

