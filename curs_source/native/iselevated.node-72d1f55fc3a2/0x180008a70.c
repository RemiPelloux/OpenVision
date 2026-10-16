
/* Address: 0x180008a70; Evidence: ev_6a09f54be833d2022b8239a3fd6c5dd11fd0842b9bc16cb44a98aa188eddf9f3 */

bool FUN_180008a70(void)

{
  BOOL BVar1;
  DWORD local_res8 [8];
  
  local_res8[0] = 0;
  BVar1 = VirtualProtect(&DAT_18001d000,0x100,2,local_res8);
  return BVar1 != 0;
}

