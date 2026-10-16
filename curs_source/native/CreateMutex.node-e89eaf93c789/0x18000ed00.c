
/* Address: 0x18000ed00; Evidence: ev_06378e952629b8b6888ced961bd4bedbb76ac2565c3fd4f044f325089891e04b */

bool FUN_18000ed00(void)

{
  BOOL BVar1;
  DWORD local_res8 [8];
  
  local_res8[0] = 0;
  BVar1 = VirtualProtect(&DAT_180027000,0x100,2,local_res8);
  return BVar1 != 0;
}

