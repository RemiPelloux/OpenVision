
/* Address: 0x180008d40; Evidence: ev_03651622a16eb916fc1e8a76c1a04a4171b3c10a4400c06a888011182c8ed06e */

bool FUN_180008d40(void)

{
  BOOL BVar1;
  DWORD local_res8 [8];
  
  local_res8[0] = 0;
  BVar1 = VirtualProtect(&DAT_18001e000,0x100,2,local_res8);
  return BVar1 != 0;
}

