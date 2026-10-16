
/* Address: 0x1800130c4; Evidence: ev_baaec00f4d14bf2e9908b283f7de0cd4b0f8d65cf2b14a520c04cba22b02ff7f */

/* WARNING: Enum "SectionFlags": Some values do not have unique names */

longlong FUN_1800130c4(dword *param_1,SectionFlags *param_2)

{
  IMAGE_SECTION_HEADER *pIVar1;
  uint uVar2;
  
  uVar2 = 0;
  pIVar1 = &IMAGE_SECTION_HEADER_180000210;
  while ((0x25000 < (uint)pIVar1->VirtualAddress ||
         (pIVar1->VirtualAddress + (pIVar1->Misc).PhysicalAddress < 0x25001))) {
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

