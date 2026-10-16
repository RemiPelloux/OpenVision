
/* Address: 0x180001060; Evidence: ev_eee636c2982020003ca99302496cc05fdca39847323bb3e92de89886762b0536 */

void FUN_180001060(void)

{
  code *pcVar1;
  DWORD DVar2;
  HANDLE pvVar3;
  
  pvVar3 = OpenProcess(0x100000,0,DAT_18001bb38);
  DVar2 = WaitForSingleObject(pvVar3,0);
  CloseHandle(pvVar3);
  while (DVar2 == 0x102) {
    Sleep(1000);
    pvVar3 = OpenProcess(0x100000,0,DAT_18001bb38);
    DVar2 = WaitForSingleObject(pvVar3,0);
    CloseHandle(pvVar3);
  }
  FUN_180001050(5);
  FUN_18000503c(0x57);
  pcVar1 = (code *)swi(3);
  (*pcVar1)();
  return;
}

