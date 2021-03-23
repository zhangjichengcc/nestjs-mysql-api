import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsArray, ValidateIf, ArrayMinSize } from 'class-validator';

export class DistributionRoleDto {
  @ApiProperty({ required: true, description: '账号ID' })
  @IsInt({ message: '账号ID必须为整数' })
  @IsNotEmpty({ message: '账号ID不能为空' })
  readonly userId: number;

  @ApiProperty({ required: true, description: '角色ID列表' })
  @IsArray({ message: '角色ID列表不能为空' })
  @ArrayMinSize(1, {message: '角色至少一个'})
  readonly roleList: number[]
}