
/* Address: 0x180003554; Evidence: ev_db7472c9c51f79794a11bc3d7550fa3a1f4a281853bc0d4252277c9eb7c57b02 */

int FUN_180003554(longlong param_1,longlong param_2)

{
  int iVar1;
  
  if (param_1 == param_2) {
    return 0;
  }
  iVar1 = strcmp((char *)(param_1 + 9),(char *)(param_2 + 9));
  return iVar1;
}

