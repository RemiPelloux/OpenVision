
/* Address: 0x180017e34; Evidence: ev_2959c56dde6f92c00e237f4e0ff52ac08f9cbdb9445c01ac4d26d8c0758aff62 */

/* WARNING: Enum "SectionFlags": Some values do not have unique names */

longlong FUN_180017e34(dword *param_1,SectionFlags *param_2)

{
  IMAGE_SECTION_HEADER *pIVar1;
  uint uVar2;
  
  uVar2 = 0;
  pIVar1 = &IMAGE_SECTION_HEADER_180000218;
  while ((0x28ba0 < (uint)pIVar1->VirtualAddress ||
         (pIVar1->VirtualAddress + (pIVar1->Misc).PhysicalAddress < 0x28ba1))) {
    uVar2 = uVar2 + 1;
    pIVar1 = pIVar1 + 1;
    if (6 < uVar2) {
      return 0;
    }
  }
  *param_1 = (pIVar1->Misc).PhysicalAddress;
  *param_2 = pIVar1->Characteristics;
  return (ulonglong)(uint)pIVar1->VirtualAddress + 0x180000000;
}

